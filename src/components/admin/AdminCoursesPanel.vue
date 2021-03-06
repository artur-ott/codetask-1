<template>
  <div>
    <h2>Kurse verwalten</h2>

    <!-- TODO -->
    <el-alert
      title="Kurse können derzeit nicht bearbeitet oder gelöscht werden, nur direkt in Firebase.
             Upload neuer Kurse ist jedoch funktionsfähig."
      type="warning"
      show-icon
      :closeable="true"
    />

    <el-alert
      v-for="course in courses"
      :key="course.id"
      :title="course.title"
      :description="course.description"
      type="success"
      :closable="false"
    />

    <!-- TODO: Refactor upload panel into own component -->
    <el-collapse-transition>
      <div v-if="showUploadCourse">
        <h2>Neuen Kurs hochladen</h2>

        <form @submit.prevent="onSubmit">
          <el-row :gutter="40">

            <!----------------------------------------------------- File Upload -->
            <el-col :xs="24" :md="12">
              <el-row class="form-row">
                <el-upload
                  ref="upload"
                  id="file"
                  accept="application/json"
                  action="#"
                  :multiple="false"
                  :show-file-list="true"
                  :on-change="onCourseFileChange"
                  :auto-upload="false"
                >

                  <el-button>Datei hochladen</el-button>
                  <div class="el-upload__tip" slot="tip">CodeTask-Kurs im JSON-Format</div>
                </el-upload>
              </el-row>

              <!-- el-input will compile to input, so the label will find its input element after compilation -->
              <!----------------------------------------------------- Title and description -->
              <el-row class="form-row">
                <label for="title">Titel</label>
                <el-input
                  id="title"
                  placeholder="Titel deines neuen Kurses"
                  :maxlength="42"
                  v-model="course.title"
                  @input="$v.course.title.$touch()"
                />
              </el-row>

              <el-row class="form-row">
                <label for="description">Beschreibung</label>
                <el-input
                  id="description"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 10}"
                  :maxlength="1000"
                  placeholder="Eine kurze Beschreibung des Kursinhalts"
                  v-model="additional.description"
                >
                </el-input>
              </el-row>
            </el-col>

          </el-row>

          <!----------------------------------------------------- Submit -->
          <el-col>
            <el-row type="flex" justify="end">
              <el-button
                @click="onSubmit"
                :disabled="$v.$invalid || this.$refs.upload.uploadFiles.length === 0"
                native-type="submit"
                type="primary"
              >
                Kurs anlegen
              </el-button>
            </el-row>
          </el-col>

        </form>
      </div>
    </el-collapse-transition>

    <content-revealer
      v-model="showUploadCourse"
      name="Upload-Formular für neue Kurse"
    />

  </div>

</template>

<script>
  import ContentRevealer from '@/components/shared/ContentRevealer'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        showUploadCourse: false,

        course: {},
        // Additional attributes that extend the original data model
        additional: {}
      }
    },

    methods: {
      onCourseFileChange (e) {
        const file = e.raw
        if (!file) {
          return
        }

        // new file automatically bound to value, but to also update visual file-list
        if (this.$refs.upload.uploadFiles.length > 1) {
          this.$refs.upload.uploadFiles = [this.$refs.upload.uploadFiles[1]]
        }

        this.uploadCourse(file)
      },

      uploadCourse (file) {
        const reader = new FileReader()
        const vm = this

        reader.onload = (e) => {
          const resultBase64 = e.target.result.split(',')[1]
          vm.course = JSON.parse(atob(resultBase64))
        }
        reader.readAsDataURL(file)
      },

      removeCourse: function (e) {
        this.course = {}
      },

      onSubmit (e) {
        const course = {...this.course, ...this.additional}
        this.transformCourse(course)

        this.$store.dispatch('ADD_NEW_COURSE', course)
          .then(() => {
            this.$notify({
              title: 'Kurs angelegt',
              message: `Der Kurs "${course.title}" wurde erfolgreich angelegt.`,
              type: 'success',
              offset: 61
            })
            this.$refs.upload.clearFiles()
            this.course = {}
            this.additional = {}
          })
      },

      // Adjustments to the old data model
      transformCourse (course) {
        course.chapters.forEach((chapter, index) => {
          // Chapters must be 1-indexed as not to break firebase reference name logic
          chapter.id = index + 1

          chapter.tasks = chapter.tasks
          // Filtering code-tasks because of currently broken backend functionality
            .filter(task => task.tag !== 'code-task')
            // Numeric indices starting at 1 instead of task-specific strings
            .map((task, index) => {
              task.id = index + 1
              return task
            })
        })
        // Use unique ids
        course.id = Date.now()
      }
    },

    computed: {
      ...mapGetters([
        'courses'
      ])
    },

    validations: {
      course: {
        title: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(42)
        }
      },
      additional: {
        description: {
          required,
          minLength: minLength(15),
          maxLength: maxLength(150)
        }
      }
    },

    components: {
      ContentRevealer
    }
  }
</script>

<style scoped>
  label {
    display: inline-block;
    width: 11rem;
  }

  .form-row {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }

</style>
