export default {
  'id': 1,
  'title': 'TestKurs1',
  'chapters': [
    {
      'id': 1,
      'title': 'Scala Basics',
      'tasks': [
        {
          'id': 'koan1',
          'tag': 'koan-task',
          'data': {
            'description': "Welcome to this course on the Art of Programming using Scala. \nIt is based on a book with the same title by Mark C. Lewis and a set of videos that accompany the book. \nThis course combines the videos by Mark C. Lewis with interactive code snippets, called koans. \nYou should listen to the video, then fill in the blanks in the code that follows.\nFor some chapters we also provide little programming exercises we call codetasks. \nHere you need to fill in a few lines of code to pass a test. Let's get started: ",
            'code': '2 + 3 should be(__)',
            'mode': 'scala',
            'solutions': [
              '5'
            ]
          }
        },
        {
          'id': 'video1',
          'tag': 'video-task',
          'data': {
            'description': 'Objects and associated methods',
            'url': 'OdHJBxfOIfs'
          }
        },
        {
          'id': 'koan2',
          'tag': 'koan-task',
          'data': {
            'description': 'Calls on Integers: Try out some basic operations on Integers',
            'code': '5.6.round should be(__)\n5.6.toInt should be(__)\n\n4.+(5) should be(__)\n3 + 8 should be(__)',
            'mode': 'scala',
            'solutions': [
              '6',
              '5',
              '9',
              '11'
            ]
          }
        },
        {
          'id': 'video2',
          'tag': 'video-task',
          'data': {
            'description': 'Scala Types',
            'url': 'yrpQnVGMX1g'
          }
        },
        {
          'id': 'koan3',
          'tag': 'koan-task',
          'data': {
            'description': 'Primitiv Datatypes: \n    Scala has a set of primitve datatypes which will \n    be familiar from other programming languages like \n    Java, C++ and so on. The difference in Scala is \n    that all of those datatypes are implemented as Classes.\n    \n    Solve the type of the following values',
            'code': "5.isInstanceOf[Int] should be(__)\n(5.1).isInstanceOf[Double] should be(__)\n(5.1F).isInstanceOf[Float] should be(__)\n5000L.isInstanceOf[Long] should be(__)\n'x'.isInstanceOf[Char] should be(__)\ntrue.isInstanceOf[Boolean] should be(__)\n\"Hello\".isInstanceOf[String] should be(__)",
            'mode': 'scala',
            'solutions': [
              'true',
              'true',
              'true',
              'true',
              'true',
              'true',
              'true'
            ]
          }
        },
        {
          'id': 'koan4',
          'tag': 'koan-task',
          'data': {
            'description': "Primitive datatype arithmetic:\n    Each primitive datatype has a unique set of arithmetic functions like +,* implemented.\n    These methods can be called by invoking the method on the value of which you'll be invoking\n    the method. The argument on the right side will be used as the argument. \n    In Scala there is a special case in which you could leave the default method invokation symbol (symbol =  '.' ) \n    if the is only one arguments on the right side.\n    \n    Solve the following values",
            'code': "6 + 4 should be(__)  \n5.6.+(4.4) should be(__)\n5.6 + 4.4 should be(__)\n\n'a' + 1 should be(__)\n'd' - 'c' should be(__)\n'a'.toInt should be(__)\n98.toChar should be(__)\n\n\"a\" + \"b\" should be(__)\n\"a\" + 1 should be(__)\n\"a\" * 3 should be(__) \n\n\"Hello \" + \"World\" should be(__)\n\"Hello \" + 5.6 should be(__)\n\"Hello \" * 3 should be(__)",
            'mode': 'scala',
            'solutions': [
              '10',
              '10.0',
              '10.0',
              '98',
              '1',
              '97',
              "'b'",
              '"ab"',
              '"a1"',
              '"aaa"',
              '"Hello World"',
              '"Hello 5.6"',
              '"Hello Hello Hello "'
            ]
          }
        },
        {
          'id': 'koan5',
          'tag': 'koan-task',
          'data': {
            'description': 'Tuple:\n    Scala is a functional language and in this case tuples likely \n    known from math are mandatory. Especially for the use in the match statement. \n    This will be discussed or tested in a later state of tests.\n    \n    Solve the right representation for the following tuples',
            'code': "(\"Hello\", 42).isInstanceOf[(String, Int)] should be(__)\n(\"Hello\" -> 42).isInstanceOf[(String, Int)] should be(__)\n\n(\"Hello\", 42, 'a').isInstanceOf[(String, Int, Char)] should be(__)\n(\"Hello\" -> 42 -> 'a').isInstanceOf[(String, Int, Char)] should be(__)\n(\"Hello\" -> 42 -> 'a').isInstanceOf[((String, Int), Char)] should be(__)",
            'mode': 'scala',
            'solutions': [
              'true',
              'true',
              'true',
              'false',
              'true'
            ]
          }
        },
        {
          'id': 'koan6',
          'tag': 'koan-task',
          'data': {
            'description': 'Tuple access:\n    Accessing the values in a tuple can be archived in different ways.\n    In this test case we use the primitive notation by accessing the variables\n    directly with indices.\n    ',
            'code': "(\"Hello\", 42)._1 should be(__)\n(\"Hello\", 42)._2 should be(__)\n(\"Hello\" -> 42 -> 'a')._2 should be(__)\n\n(\"Hello\" -> 42 -> 'a')._1 should be(__)\n(\"Hello\" -> 42 -> 'a')._1._2 should be(__)",
            'mode': 'scala',
            'solutions': [
              '"Hello"',
              '42',
              "'a'",
              '(Hello, 42)',
              '42'
            ]
          }
        },
        {
          'id': 'video3',
          'tag': 'video-task',
          'data': {
            'description': 'Details of numbers',
            'url': '2dImF4DCWlY'
          }
        },
        {
          'id': 'koan7',
          'tag': 'koan-task',
          'data': {
            'description': 'Binary Numbers:\n    Decimal numbers can be converted into binary numbers and vice versa.\n    ',
            'code': '42.toBinaryString should be(__)',
            'mode': 'scala',
            'solutions': [
              '"101010"'
            ]
          }
        },
        {
          'id': 'video4',
          'tag': 'video-task',
          'data': {
            'description': 'Additional Integer Types',
            'url': 'dJPxiFFZypU'
          }
        },
        {
          'id': 'koan8',
          'tag': 'koan-task',
          'data': {
            'description': 'Type Limits:\n    Types have a certain amount of bytes reserved for their value. Due to this restriction \n    there is a chance to get overflows during runtime.\n    ',
            'code': 'Int.MaxValue should be(__)\nInt.MinValue should be(__)\nInt.MaxValue + 1 should be(__)\n\nByte.MaxValue should be(__)\n\nShort.MaxValue should be(__)\n\n1000000000 + 1000000000 should be(__)\n2000000000 + 2000000000 should be(__)\n\n2000000000L + 2000000000L should be(__)\n\nChar.MinValue.toInt should be(__)\nChar.MaxValue.toInt should be(__)',
            'mode': 'scala',
            'solutions': [
              '2147483647',
              '-2147483648',
              '-2147483648',
              '127',
              '32767',
              '2000000000',
              '-294967296',
              '4000000000L',
              '0',
              '65535'
            ]
          }
        },
        {
          'id': 'video5',
          'tag': 'video-task',
          'data': {
            'description': 'Binary Arithmetic and presentation',
            'url': '212jDl_5B7E'
          }
        },
        {
          'id': 'video6',
          'tag': 'video-task',
          'data': {
            'description': 'Signed and unsigned values',
            'url': 'qTAw30GgDZs'
          }
        },
        {
          'id': 'koan9',
          'tag': 'koan-task',
          'data': {
            'description': 'Value presentation in other representations:\n    \n    ',
            'code': '42.toBinaryString should be(__)\n-42.toBinaryString should be(__)   \n\n42.toOctalString should be(__)\n42.toHexString should be(__)',
            'mode': 'scala',
            'solutions': [
              '"101010"',
              '"11111111111111111111111111010110"',
              '"52"',
              '"2a"'
            ]
          }
        },
        {
          'id': 'video7',
          'tag': 'video-task',
          'data': {
            'description': 'Floating point numbers and math libary',
            'url': 'LrU7mLiTWKo'
          }
        },
        {
          'id': 'koan10',
          'tag': 'koan-task',
          'data': {
            'description': ' Mathematical Functions:\n    Scala delivers a special Math Library like many other programming languages.\n    Since version 2.08 Scala refactored their math library. It is now accessable\n    via "scala.math"\n    Solve the result of the constants and method calls',
            'code': 'scala.math.Pi should be(__)\nscala.math.E should be(__)\nscala.math.sqrt(9) should be(__)',
            'mode': 'scala',
            'solutions': [
              '3.141592653589793',
              '2.718281828459045',
              '3.0'
            ]
          }
        },
        {
          'id': 'video8',
          'tag': 'video-task',
          'data': {
            'description': 'Values and Variables',
            'url': 'xJNb8UhrMcY'
          }
        },
        {
          'id': 'koan11',
          'tag': 'koan-task',
          'data': {
            'description': ' Variables and Pattern matching:\n    There are two variable concepts in Scala, Val and Var. Val declares a constant/immutable variable.\n    Var on the other hand declares a mutable variable. Due to best practice the usa of Var should\n    be minimized to the bare minimum.\n    \n    Pattern matching revisits the problem of accessing a tuple. It provides an elegant way of accessing\n    the values of a tuple by simple giving them temporary names instead. This feature makes the code \n    more readable which empowers the level of understanding.',
            'code': 'val constValue = 5\nvar variableValue = 6\n\nval explicitInt: Int = 6\n\nval name = ("Max", "Mustermann")\nname._1 should be(__)\n\nval (firstName, lastName) = ("Max", "Mustermann")\nfirstName should be(__)\nlastName should be(__)',
            'mode': 'scala',
            'solutions': [
              '"Max"',
              '"Max"',
              '"Mustermann"'
            ]
          }
        },
        {
          'id': 'video9',
          'tag': 'video-task',
          'data': {
            'description': 'Mental model of variables',
            'url': 'TLfRT5Ab7d0'
          }
        },
        {
          'id': 'video10',
          'tag': 'video-task',
          'data': {
            'description': 'Details of Strings and Chars',
            'url': 'hkPwD4HUK_0'
          }
        },
        {
          'id': 'koan12',
          'tag': 'koan-task',
          'data': {
            'description': ' String Interpolation:\n    Scala delivers a special string interpolation operator (s") which offers the chance\n    to concat strings without having the problem of escaping characters. The syntax is \n    very similar to Printf methods where you add a placeholder for the value. Using s" is bound to\n    strings. If you want to be more flexible you can use the (f") interpolator. With this you have\n    exactly the same style as with printf. \n    \n    There is a second method of writing strings without bothering about escaping characters\n    and this could be archived with tree ("), see last statement.',
            'code': "val a = 5\nval b = 10\nval c = 'x'\n\na + \" \" + b + \" \" + c should be(__)\ns\"$a $b $c\" should be(__)\n\"\"\"s\"$a $b $c\" \"\"\" should be(__)\ns\"${a + 5} $b $c\" should be(__)",
            'mode': 'scala',
            'solutions': [
              '"5 10 x"',
              '"5 10 x"',
              '"s"$a $b $c" "',
              '"10 10 x"'
            ]
          }
        },
        {
          'id': 'video11',
          'tag': 'video-task',
          'data': {
            'description': 'Basic string methods',
            'url': 'DDlVziE243A'
          }
        },
        {
          'id': 'koan13',
          'tag': 'koan-task',
          'data': {
            'description': " String Methods:\n    Due to the fact that Scala is using the String implementation of Java all methods of Java Strings are availble.\n    If you're familiar with Java and the String Class then you know most of them already. But there are additional methods like splitAt.",
            'code': 'val name = "Max"\nname.length should be(__)\n\nname(0) should be(__)\n\nname.indexOf("M") should be(__)\nname.indexOf("Z") should be(__)\n\nval fullName = "Max Mustermann"\nfullName.substring(4) should be(__)\nfullName.substring(4, 10) should be(__)\n\nfullName.splitAt(4) should be(__)\n\n"Max ".trim should be(__)\n"Max".toUpperCase should be(__)\n"Max".toLowerCase should be(__)',
            'mode': 'scala',
            'solutions': [
              '3',
              "'M'",
              '0',
              '-1',
              '"Mustermann"',
              '"Muster"',
              '("Max ", Mustermann)',
              '"Max"',
              '"MAX"',
              '"max"'
            ]
          }
        },
        {
          'id': 'video12',
          'tag': 'video-task',
          'data': {
            'description': 'Immutability of Strings',
            'url': 'jZOg0P8-26E'
          }
        },
        {
          'id': 'video13',
          'tag': 'video-task',
          'data': {
            'description': 'Sequential Execution and string example',
            'url': 'ReS2nusS7R8'
          }
        }
      ]
    },
    {
      'id': 2,
      'title': 'Conditionals',
      'tasks': [
        {
          'id': 'video1',
          'tag': 'video-task',
          'data': {
            'description': 'Conditionals',
            'url': 'DYUJGtNcuYk'
          }
        },
        {
          'id': 'koan1',
          'tag': 'koan-task',
          'data': {
            'description': " If conditional:\n    The If conditional is in almost everything the same as in any other programming language. \n    The only fact which differs from some other languages is that the conditional always returns a value.\n    The last expression in the code block is returned as result.      \n    In some cases this is very benefitial. For example if you don't want to introduce a variable to store\n    a result. In certain languages you always have to declare a variable in which you store the value of the\n    conditional, in scala you can use a val to store the result of it.",
            'code': 'val number = 12\nval response = if (number >= 0) "Positive Number" else "Negative Number"\nresponse should be(__)',
            'mode': 'scala',
            'solutions': [
              '"Positive Number"'
            ]
          }
        },
        {
          'id': 'video2',
          'tag': 'video-task',
          'data': {
            'description': 'Code Blocks',
            'url': 'WUOV9Km0o_8'
          }
        },
        {
          'id': 'koan2',
          'tag': 'koan-task',
          'data': {
            'description': ' Code block:\n    Code blocks are expressions seperated from the code with curly braces. Examples for code blocks\n    are method bodies, conditionals, loops or static code blocks. The result of a code block is always the\n    last statement',
            'code': 'val response = {\n  4\n  5\n  6\n}\nresponse should be(__)\n\nval number = -42\nval conditionResponse = if (number >= 0) {\n  println("The number is positive")\n  "Positive Number"\n} else {\n  println("The number is negative")\n  "Negative Number"\n}\n\nconditionResponse should be(__)',
            'mode': 'scala',
            'solutions': [
              '6',
              '"Negative Number"'
            ]
          }
        },
        {
          'id': 'video3',
          'tag': 'video-task',
          'data': {
            'description': 'Comparison Operators',
            'url': 'XtDbWYHOQGg'
          }
        },
        {
          'id': 'koan3',
          'tag': 'koan-task',
          'data': {
            'description': ' Comparision Operator:\n    In Scala the basic comparison operators are implemented on the primitiv datatypes. \n    To compare strings there are to seperate comparing methods. The first one is to check for equality value wise(see 6th and 7th statement). \n    The other one is to check for identity, checking if two objects are the same (8th and 9th statement).\n    \n    The last statement is a bit tricky due to scalas compiler and performance enhancements.',
            'code': "5 < 4 should be(__)\n10 > 2 should be(__)\n0 >= -1 should be(__)\n2 <= 2 should be(__)\n'a' > 'z' should be(__)\n\n\"hi\" == \"hy\" should be(__)\n\"hi\" != \"hy\" should be(__)\n\n\"hi\" eq \"hy\" should be(__)\n\"hi\" eq \"hi\" should be(__)",
            'mode': 'scala',
            'solutions': [
              'false',
              'true',
              'true',
              'true',
              'false',
              'false',
              'true',
              'false',
              'true'
            ]
          }
        },
        {
          'id': 'video4',
          'tag': 'video-task',
          'data': {
            'description': 'Boolean logic',
            'url': 'qNly4zSs9-4'
          }
        },
        {
          'id': 'koan4',
          'tag': 'koan-task',
          'data': {
            'description': ' Boolean Logic:\n    The boolean logic is equal to the java language and offers the default behaviour.',
            'code': "5 > 2 && 'a' != 'b' should be(__)\n\nval x = true\n!x || \"Hello\".length >= 4 should be(__)",
            'mode': 'scala',
            'solutions': [
              'true',
              'true'
            ]
          }
        },
        {
          'id': 'video5',
          'tag': 'video-task',
          'data': {
            'description': 'Operator Precedence',
            'url': 'hF-Kf_zG_G0'
          }
        },
        {
          'id': 'koan5',
          'tag': 'koan-task',
          'data': {
            'description': ' Operator Precedence:\n    To know when which part of a calculation or statement is processed first, Scala has \n    a fix precedence which is documentated and listed below:\n      \n    (all letters)\n\n    ^\n    &\n    < >\n    = !\n    :\n    + -\n    * / %\n    (all other special characters)\n    \n    Solve the result of the statements',
            'code': '3 + 4 * 5 should be(__)\n(3 + 4) * 5 should be(__)\n\n3 + 3 < 4 * 2 should be(__)',
            'mode': 'scala',
            'solutions': [
              '23',
              '35',
              'true'
            ]
          }
        },
        {
          'id': 'video6',
          'tag': 'video-task',
          'data': {
            'description': 'Nested Ifs',
            'url': 'ZT3zAIQhDE8'
          }
        },
        {
          'id': 'koan6',
          'tag': 'koan-task',
          'data': {
            'description': " Nested If's:\n    If conditionals could be nested as seen below. A certain level of nested is okay but \n    in case of code quality, maintainability and readability it isn't a good practice if \n    the level of nested if's is above two",
            'code': 'val categorie = "Food"\nval item = "Lasagne"\nval price = if (categorie == "Beverage") {\n  if (item == "Coke") 2.6\n  else if (item == "Water") 1.2\n  else 0.0\n} else if (categorie == "Food") {\n  if (item == "Pizza") 6.9\n  else if (item == "Risotto") 7.0\n  else 7.5\n} else 0.0\nprice should be(__)',
            'mode': 'scala',
            'solutions': [
              '7.5'
            ]
          }
        },
        {
          'id': 'video7',
          'tag': 'video-task',
          'data': {
            'description': 'Bitwise Arithmetic',
            'url': '8CpZLfe0Lug'
          }
        },
        {
          'id': 'koan7',
          'tag': 'koan-task',
          'data': {
            'description': ' Bitwise Arithmetic:\n    For low level programming and encryption bitwise arithmetic is mandatory.\n    It contains basic operations as &,|,^,~ and bitwise shifting',
            'code': '42 & 6 should be(__)\n13 | 4 should be(__)\n5 ^ 4 should be(__)\n~7 should be(__)\n1 << 1 should be(__)\n4 << 3 should be(__)\n10 >> 1 should be(__)',
            'mode': 'scala',
            'solutions': [
              '2',
              '13',
              '1',
              '-8',
              '2',
              '32',
              '5'
            ]
          }
        }
      ]
    },
    {
      'id': 3,
      'title': 'Functions',
      'tasks': [
        {
          'id': 'video1',
          'tag': 'video-task',
          'data': {
            'description': 'Simple function definition',
            'url': 'rCQN_LRw2Ds'
          }
        },
        {
          'id': 'video2',
          'tag': 'video-task',
          'data': {
            'description': 'Side Effects',
            'url': 'a5hUmOdsDN4'
          }
        },
        {
          'id': 'koan1',
          'tag': 'koan-task',
          'data': {
            'description': " Functions:\n    The bread and butter of Scala are functions easily that it's a functional programming language. \n    To create a function you define a function with the keyword def. A function can consist of a single \n    line or multiple lines building a code block. Due to Scala all functions should return a value \n    otherwise they could create side effects.",
            'code': 'def square(x: Double): Double = x * x\n\nsquare(3.0) should be(__)\n\ndef add(x: Int, y: Int, z: Int): Int = {\n  x + y + z\n}\n\nadd(3, 2, 1) should be(__)',
            'mode': 'scala',
            'solutions': [
              '9.0',
              '6'
            ]
          }
        },
        {
          'id': 'video3',
          'tag': 'video-task',
          'data': {
            'description': 'Lambda Expressions',
            'url': '7a6MtgFNaWg'
          }
        },
        {
          'id': 'koan2',
          'tag': 'koan-task',
          'data': {
            'description': ' Lambda Literals: \n    Lambda literals are function literals. You could see it as a inline function.\n    They are mostly defined (exception s. last statement) with a symbol called rocket (=>).\n    In special cases you could use the buildin wildcard feature (s. last statement).\n    Lambda literals can also be called as anonymous functions',
            'code': 'val square = (x: Double) => x * x\nsquare(3) should be(__)\n\nval add = (x: Double, y: Double) => x + y\nadd(3, 4) should be(__)\n\nval func = (_: Double) * 2\nfunc(25) should be(__)',
            'mode': 'scala',
            'solutions': [
              '9.0',
              '7.0',
              '50.0'
            ]
          }
        },
        {
          'id': 'video4',
          'tag': 'video-task',
          'data': {
            'description': 'Higher order functions',
            'url': 'D8o96hXjBBs'
          }
        },
        {
          'id': 'koan3',
          'tag': 'koan-task',
          'data': {
            'description': ' Higher Order Functions:\n    Higher order functions are based on lambda literals. \n    Basic usecase: \n      You have a set of numbers and you want to add, multiply and subtract them.\n      You could write a function for each arithmetic function or you would use the\n      benefits of lambda literals. \n      \n    In this example the user can choose which arithmetic function will be applied \n    to the dataset x,y,z by passing an lambda literal as an argument.\n    \n    The two last statements make use of the wildcard feature which shortens the function call and \n    enhances the readability',
            'code': 'def combine(x: Int, y: Int, z: Int, f: (Int, Int) => Int): Int = f(f(x, y), z)\ncombine(2, 3, 4, (x, y) => x + y) should be(__)\ncombine(2, 3, 4, (x, y) => x * y) should be(__)\ncombine(2, 3, 4, _ * _) should be(__)\ncombine(2, 3, 4, _ min _) should be(__)',
            'mode': 'scala',
            'solutions': [
              '9',
              '24',
              '24',
              '2'
            ]
          }
        },
        {
          'id': 'video5',
          'tag': 'video-task',
          'data': {
            'description': 'Function example with strings',
            'url': '5Y0_fo3Jogk'
          }
        },
        {
          'id': 'code1',
          'tag': 'code-task',
          'data': {
            'description': ' Exercise: (String operations) \n    Write a function which disassembles a given time string. The result should be a tuple containing \n    the hours and minutes',
            'mode': 'scala',
            'code': 'def splitTime(time: String): (Int, Int) = {\n  val colonPosition = time.indexOf(":")\n  //todo\n}'
          }
        },
        {
          'id': 'video6',
          'tag': 'video-task',
          'data': {
            'description': 'Type declarations',
            'url': 'NrgF2vnGOsU'
          }
        },
        {
          'id': 'koan4',
          'tag': 'koan-task',
          'data': {
            'description': " Type Declarations (Alias)\n    Scala offers with the keyword type a way to shorten variable types with aliases. In the example below \n    you see how to alias a three tuple. Aliases can make your code more readable. Keep in mind that aliaes don't\n    have any logic. In a later chapter we learn about case classes which will be even better.",
            'code': 'type Vect3 = (Double, Double, Double)\ndef addVect(v1: Vect3, v2: Vect3): Vect3 = { (v1._1 + v2._1, v1._2 + v2._2, v1._3 + v2._3) }\nval v1: Vect3 = (2, 3, 3)\nval v2: Vect3 = (4, 7, 7)\n\naddVect(v1, v2) should be(__)',
            'mode': 'scala',
            'solutions': [
              '(6, 10, 10)'
            ]
          }
        }
      ]
    }
  ]
}
