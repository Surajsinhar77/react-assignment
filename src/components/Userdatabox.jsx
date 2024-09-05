import Graph from "./Graph";

export default function Userdatabox({data}) {
  return (
    <div className="px-10 py-5 rounded-xl border flex grow items-center justify-between">
      <span className="flex flex-col gap-7">
        <div> {data.title}</div>

        <div className="text-5xl font-semibold"> {data.count} </div>

        <div className="text-sm font-light flex flex-col gap-2">
          <h1>{data.manCount} Men</h1>
          <h1> {data.womanCount} woman </h1>
        </div>
      </span>

      <span className="flex flex-col justify-between gap-3">
        {/* <img src="" alt="graph_image" /> */}
        <Graph className="h-40 w-20" />
        <span className="bg-red-200 text-center p-1 rounded-sm">
          +${data.graph}% Past month
        </span>
      </span>
    </div>
  );
}
