
guidedModel =// @startlock
{
	会社 :
	{
		methods :
		{// @endlock
			testc1:function()
			{// @lock
				alert("Hello");
			}// @startlock
		},
		collectionMethods :
		{// @endlock
			test1:function()
			{// @lock
				alert("Hello");
			},// @lock
			試験１:function()
			{// @lock
				Document.write("Hello");
			}// @startlock
		}
	}
};// @endlock
