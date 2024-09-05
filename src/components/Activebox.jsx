
export default function ActiveBox({data}){
  console.log(data)
    return (
        <div className={`px-10 py-5 rounded-xl flex-1  ${data.css}`}>
          <div>
            <h1 className="font-medium text-xl"> {data.title} </h1>
          </div>

          <div>
            <h1 className="font-medium text-3xl"> {data.count} </h1>
          </div>

          <div>
            <h1 className={`text-lg ${data.text_css}`}> {data.urgent}</h1>
          </div>
        </div>
    )
}