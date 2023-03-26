let arry=[1,3,3]
function dublicate(arry)
{
	let result=[];
	for(i=0;i<arry.length;i++)
	{
		let exists=false;
	for(j=0;j<result.length;j++)
	{
		if(arry[i]===result[j])
		{
			exists=true;
			break;
		}
	}
	if(!exists){
		result.push(arry[i])
	}
}

return result;
}
document.write(dublicate(arry));