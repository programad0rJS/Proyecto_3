package main
import ("fmt")

func main() {
  fmt.Println("Hello World!")
}


package main
import ("fmt")

func main() {
  var i, j string = "Hello","World"

  fmt.Print(i)
  fmt.Print(j)
}




package main
import ("fmt")

func main() {
  day := 4

  switch day {
  case 1:
    fmt.Println("Monday")
  case 2:
    fmt.Println("Tuesday")
  case 3:
    fmt.Println("Wednesday")
  case 4:
    fmt.Println("Thursday")
  case 5:
    fmt.Println("Friday")
  case 6:
    fmt.Println("Saturday")
  case 7:
    fmt.Println("Sunday")
  }
}




package main
import ("fmt")

// Create a function
func myMessage() {
  fmt.Println("I just got executed!")
}

func main() {
  myMessage() // call the function
}


Termine 