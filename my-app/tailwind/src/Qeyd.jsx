import { useState } from "react"
const Qeyd = ({ data, setData }) => {

  const [form, setForm] = useState({ ad: '', soyad: '', email: '' })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }
  function addData(e) {
    e.preventDefault()
    if (form.ad && form.soyad && form.email) {
      setData([...data,form])  
      setForm
      ({ ad: '',
       soyad: '',
       email: '' })
    }else{
      alert('xana bosdur')
    }
      
  }

  return (
    <div className=" flex ">
      <div >
        <h1 className="font-mono text-5xl italic">Qeydiyyat formu</h1>
        <form className=" border-double border-4 border-indigo-500 w-[450px] h-[300px] text-left mt-4 p-5 text-xl font-medium">
          <div className="mb-2">
            <label className="inline-block pr-2">Ad:</label>
            <input type="text" name="ad" value={form.ad} onChange={handleChange} className=" border-2" />
          </div>
          <div className="mb-2">
            <label className="inline-block pr-2" >Soyad:</label>
            <input type="text" name="soyad" value={form.soyad} onChange={handleChange} className=" border-2" />
          </div>
          <div className="mb-2">
            <label className="inline-block pr-2">Email:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className=" border-2" />
          </div>
          <button onClick={addData} className="bg-cyan-500 hover:bg-cyan-600 inline-block rounded-md p-2 mt-5">Submit</button>
        </form>
      </div>

    </div>

  )


}
export default Qeyd 