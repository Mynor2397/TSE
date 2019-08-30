package routers

import (
	"net/http"
	"text/template"
)

var tmpl = template.Must(template.ParseGlob("views/*"))

//TsePage is the view that execute the main page.
func TsePage(w http.ResponseWriter, r *http.Request) {
	tmpl.ExecuteTemplate(w, "index", nil)
}
