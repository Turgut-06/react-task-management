/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Board } from "../../data/board";
import { Columns } from "../../types";
import { AddOutline } from "react-ionicons";
import Task from "../../component/Task";
import AddModal from "../../component/Modal/AddModal";
import { onDragEnd } from "../../helpers/onDragEnd";


const Home = () => {

  //statemin columns tipinde olduğunu belirttik
  const [columns, setColumns] = useState<Columns>(Board) //Board kartların içine yerleşecek datalar
  const[modalOpen,setModalOpan]=useState(false)
  const[selectedColumn,setSelectedColumn]=useState("")

  const opanModal = (columnId : any) => {
    setSelectedColumn(columnId)
    setModalOpan(true)
  }

  const closeModal = () => {
    setModalOpan(false)
  }

  const handleAddTask = (taskData: any) => {
    const newBoard = {...columns};
    newBoard[selectedColumn].items.push(taskData);
    //Board.backlog.items.push(taskData)
    

  
    }

  return (
    <div>
      <DragDropContext onDragEnd={(result:any) => onDragEnd(result,columns,setColumns)}>
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnId, column]: any) =>
          (<div key={columnId} className="w-full flex flex-col">

            <Droppable droppableId={columnId} key={columnId}>

              {(provided: any) => (

                //innerRef doğrudan doma ulaşmasını sağlıyor droppableProps sürükle-bırak alanını tanımlamak için gerekli olan parametreleri içerir.
                //provided, DOM manipülasyonu ve sürükleme sırasında kullanıcı arayüzünün stabil kalması için kritik öneme sahiptir.Sürüklenebilir ve bırakılabilir alanlara doğru referansları ve özellikleri ekleyerek sürükle-bırak işlemlerinin düzgün çalışmasını sağlar.

                <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"  >
                  <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                    {column.name}
                  </div>
                  {column.items.map((task: any, index: any) => (

                    <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>

                      {(provided: any) => <> <Task provided={provided} task={task}/> </>}





                    </Draggable>

                  ))}
                  
                  {provided.placeholder} 

                </div>
                //placeholder ; sürüklenen öğenin orijinal konumunda geçici bir yer tutucu

              )}

            </Droppable>

            <div onClick={() => opanModal(columnId)} className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px] ">
                  
                  <AddOutline color={"#555"}/>
                  Add Task

            </div>




          </div>))}
        </div>
      </DragDropContext>

      <AddModal isOpen={modalOpen} onClose={closeModal} setOpen={setModalOpan} handleAddTask={handleAddTask}/>

    </div>
  )
}

export default Home