
const TableComparation = () => {
  return (
    <div className="p-8">

      <div className="relative overflow-x-auto rounded-xl shadow-2xl">
        <table className="w-full text-sm text-left text-slate-700 ">
          <thead className="text-lg text-white uppercase bg-secondary ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Plan
              </th>
              <th scope="col" className="px-6 py-3">
                Precio Mensual
              </th>
              <th scope="col" className="px-6 py-3">
                Canales
              </th>
              <th scope="col" className="px-6 py-3">

              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                TV Lite
              </th>
              <td className="px-6 py-4">
                $20.22
              </td>
              <td className="px-6 py-4">
                <p className="text-center">40 Canales</p>
                <p className="text-center">{`20HD`}</p>
              </td>
              <td className="px-6 py-4">
                <button className="bg-secondary hover:bg-pink-800 py-2 w-24 px-4 rounded-full text-white font-extrabold" >Lo quiero</button>
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                TV Full
              </th>
              <td className="px-6 py-4">
                $20.22
              </td>
              <td className="px-6 py-4">
                <p className="text-center">100 Canales</p>
                <p className="text-center">{`50HD`}</p>
              </td>
              <td className="px-6 py-4">
                <button className="bg-secondary hover:bg-pink-800 py-2 w-24  px-4 rounded-full text-white font-extrabold" >Lo quiero</button>
              </td>
            </tr>


          </tbody>
        </table>
      </div>


    </div>
  )
}

export default TableComparation