function countSort(arr){
  // range is set to 0-99
  let min=0,max=99;
  let result=Array(max-min+1).fill(0);

  // get count
  for(let range=min;range<=max;range++){
    for(let x=0;x<arr.length;x++){
      if(arr[x]===range){
        result[range]++;
      }
    }
  }
  // console.log(result.join(' '));

  // output in order
  arr=[];
  for(let i=min;i<=max;i++){
    if(result[i]>0){
      for(let x=0;x<result[i];x++){
        arr.push(i);
      }
    }
  }
  console.log(arr.join(' '));
}

countSort([ 63,
  25,
  73,
  1,
  98,
  73,
  56,
  84,
  86,
  57,
  16,
  83,
  8,
  25,
  81,
  56,
  9,
  53,
  98,
  67,
  99,
  12,
  83,
  89,
  80,
  91,
  39,
  86,
  76,
  85,
  74,
  39,
  25,
  90,
  59,
  10,
  94,
  32,
  44,
  3,
  89,
  30,
  27,
  79,
  46,
  96,
  27,
  32,
  18,
  21,
  92,
  69,
  81,
  40,
  40,
  34,
  68,
  78,
  24,
  87,
  42,
  69,
  23,
  41,
  78,
  22,
  6,
  90,
  99,
  89,
  50,
  30,
  20,
  1,
  43,
  3,
  70,
  95,
  33,
  46,
  44,
  9,
  69,
  48,
  33,
  60,
  65,
  16,
  82,
  67,
  61,
  32,
  21,
  79,
  75,
  75,
  13,
  87,
  70,
  33 ]);