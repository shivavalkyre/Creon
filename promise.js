  const getOne = new Promise(function(resolve, reject) {
    resolve('one');
  });
  const getTwo = new Promise(function(resolve, reject) {
    resolve('two');
  });
  const getThree = new Promise(function(resolve, reject) {
    resolve('three');
  });   
  const getFour = new Promise(function(resolve, reject) {
    resolve('four');
  });

  const convertMetaToUser = (request, response) => {
        var resp = ""

        getOne.then(
            result => {
                //console.log(result)
                resp = resp + result + ","
                //console.log(resp)
            },
            error => {
                console.log(error)
            }
        ).then(
            getTwo.then(
                result => {
                    //console.log(result)
                    resp = resp + result + ","
                    //console.log(resp)
                },
                error => {
                    console.log(error)
                }
            )
        ).then(
            getThree.then(
                result => {
                    //console.log(result)
                    resp = resp + result + ","
                    //console.log(resp)
                },
                error => {
                    console.log(error)
                }
            )
        ).then(
            
            getFour.then(
                result => {
                    //console.log(result)
                    resp = resp + result 
                    console.log(resp)
                    response.send(resp)
                },
                error => {
                    console.log(error)
                }
            )
        )

       

       

    
        // console.log('response:',resp)
        // var reply = {}
        // reply = resp
        // response.send(reply)
  }

  module.exports = {
    convertMetaToUser
}