function generateArray()
{
    var randomArray = [];
    for(let i=0; i<30; i++)
    {
      randomArray.push( Math.round(Math.random()*100) );
    }
    document.write('generate random array<br>')
    document.write(randomArray.length + '<br>')
    document.write(randomArray + '<br><br>');
    return randomArray

}

function unique_array(oneArray)
{
    for(i=0;i<oneArray.length; i++)
    {
        for(j=i+1; j<oneArray.length; j++)
        {
           if(oneArray[i] == oneArray[j])
           {
               oneArray.splice(j,1)
           }
        }
    }
    document.write('A unique array: <br>')
    document.write(oneArray.length + '<br>')
    document.write(oneArray + '<br><br>')
    return oneArray
}

function sort_uniqueArray()
{
    let randomArray = generateArray()
    let uniqueArray = unique_array(randomArray) 
  
    //sorting
    for(i=0; i< uniqueArray.length; i++)
    {
        for(j=i+1; j<uniqueArray.length; j++)
            {
                if(uniqueArray[i]>uniqueArray[j] )
                    {
                        let a = uniqueArray[i]
                        let b = uniqueArray[j]
                        uniqueArray[i] = b
                        uniqueArray[j] = a
                    }
            }
    }
    document.write('sorted array: <br>')
    document.write(uniqueArray.length + '<br>')    
    document.write(uniqueArray)
}
