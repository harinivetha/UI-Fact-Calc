function calc() 
{
  var n =document.getElementById('n').value;
  var c;
  var i;
  var j;
  var result='<ul>';
  for(i=1;i<=n;i++) 
  {
    c=1;
    for(j=1;j<=i;j++)
    {
      c=c*j;
    }
    result=result+'<li class="fact-class">'+c+'</li>';
  }
  result=result+'</ul';
  document.getElementById('fact').innerHTML = result;
}