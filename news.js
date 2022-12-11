const convertMetaToUser = (request, response) => {
    const categories = [
        { id : 1, name : 'Sport'},
        { id : 2, name : 'Food'}
    ];
    const news = [
        { id : 1, title : 'UEFA League Champion', 	category : 1},
        { id : 2, title : 'Juara Piala Sudirman', 	category : 1},
        { id : 3, title : 'Final F1', 				category : 1},
        { id : 4, title : 'Cara memasak Kue', 		category : 2},
        { id : 5, title : '10 Restoran enak', 		category : 2}
    ];

    var arr_result = {}
    
    for(var i=0; i<=categories.length-1;i++)
    {
        console.log(categories[i].name)
        var cat = categories[i].name
        var cat_name = categories[i].name
        var cat_id = categories[i].id
        cat = []
      
        for (var j=0;j<=news.length-1;j++)
         {
            if (news[j].category == cat_id)
            {
                cat.push(news[j])
            }
         }
        arr_result [cat_name] = cat
    }

    response.send(arr_result)
}



module.exports = {
    convertMetaToUser
}