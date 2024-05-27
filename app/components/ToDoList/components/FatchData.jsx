import React from 'react'
const fetchList=async ()=>{
 let list=await fetch(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/list`)
 list=await list.json()
 return list
}
async function FatchData({receivedListData}) {
    const listData=await fetchList();
    receivedListData(listData)
  return (
    <div>FatchData</div>
  )
}

export default FatchData