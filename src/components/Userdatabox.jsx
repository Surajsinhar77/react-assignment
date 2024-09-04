
export default function Userdatabox(){
    return (
        <div className="px-10 py-5 rounded-xl border flex grow">
            <span className="flex flex-col gap-5">
                <div> Total Employees</div>

                <div className="text-5xl font-semibold">
                    25
                </div>

                <div className="text-sm font-light">120 Men 96 woman</div>
            </span>

            <span>
                <img src="" alt="graph_image" />
                <span className="bg-red-200 text-center p-1 rounded-sm">
                    +2% Past month
                </span>
            </span>
        </div>
    )
}