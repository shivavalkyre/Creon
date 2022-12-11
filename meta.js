const convertMetaToUser = (request, response) => {
    const meta = [
        {
            metakey: 'name',
            metavalue: 'Edwin'
        },
        {
            metakey: 'address',
            metavalue: 'jln ABC'
        },
        {
            metakey: 'phone',
            metavalue: '30259732059'
        },
        {
            metakey: 'email',
            metavalue: 'a@a.com'
        },
        {
            metakey: 'city',
            metavalue: 'Jakarta'
        }
    ]

    var arr_response = {}
    for (var i=0;i<= meta.length-1;i++)
    {
        var key = meta[i].metakey
        var value = meta[i].metavalue

        arr_response[key] = value
    }

    response.send(arr_response)
}



module.exports = {
    convertMetaToUser
}