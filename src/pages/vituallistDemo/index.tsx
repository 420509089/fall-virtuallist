import React from "react";
import { useCallback, useState,useRef, useEffect } from "react";
import VirtualList from "@/components/virtuallist";
import './index.scss'
export const VituallistDemo = () => {
    const [list, setsourceData] = useState([])

    const getData = useCallback(() => {
      const datas: Array<any> = []
      const pageSize = 90
      for (let i = 10; i < pageSize; i++) {
        datas.push(`${i} Item`)
      }
      setsourceData((list) => {
        return [...list, ...datas]
      })
    }, [])

    const handleScroll = () => {
        console.log(123)
    }
    useEffect(() => {
      getData()
    }, [getData])
    
    const itemRender = (data: any, dataIndex: number) => {
      return  <p className={dataIndex % 2 === 0 ? '' : 'virtualList-demo-item'}>可变大小隔行展示-{data}</p>
    }
    return <div>
    <VirtualList
      itemHeight={66}
      list={list}
      itemEqual={false}
      itemRender={itemRender}
      containerHeight={600}
      onScroll={handleScroll}
    />
  </div>
}