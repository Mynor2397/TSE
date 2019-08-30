package main

import (
	"log"
	"net/http"

	"github.com/Mynor2397/TSE-WEB/routers"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/index", routers.TsePage)
	log.Println("Listen and Sever on port 4040")
	err := http.ListenAndServe(":4040", nil)
	log.Fatal(err)
}
