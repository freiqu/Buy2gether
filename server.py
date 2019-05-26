from bottle import route, run, template, static_file, get, post, request



@get('/index')
def index():
    return static_file("index.html", root=".")

@get('/css/style.css')
def css():
    return static_file("style.css", root="./css")

@get('/js/<pfad:path>')
def js(pfad):
    return static_file(pfad, root="./js")

@get('/contactform/<pfad:path>')
def contactform(pfad):
    return static_file(pfad, root="./contactform")

@get('/img/<pfad:path>')
def img(pfad):
    return static_file(pfad, root="./img")

@get('/lib/<pfad:path>')
def lib(pfad):
    return static_file(pfad, root="./lib")


einkaeuferposts=[]
@post('/einkaeufer')
def einkaeufer():
    postdata = request.json
    einkaeuferposts.append(postdata)
    print(einkaeuferposts)
    return



#run(host='localhost', port=8080)
run(host='0.0.0.0', port=8080)








#$.ajax({
#                url: 'einkaeufer',
#                dataType: 'json',
#                type: 'post',
#                data: {"test":14},
#                success: function( data, textStatus, jQxhr ){
#                    console.log(data);
#                },
#})
