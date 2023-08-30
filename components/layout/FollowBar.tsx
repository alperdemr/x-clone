import Avatar from "../Avatar"

const FollowBar = () => {
  return (
    <div className=" px-6 py-4 hidden lg:block">
      <div className=" bg-slate-100 rounded-xl p-4">
        <h2 className=" font-semibold text-xl">Who to follow</h2>
        <div className=" flex flex-col gap-6 mt-4">
          <div className=" flex flex-row items-center gap-4">
            <Avatar />
            <div className=" flex flex-col">
              <p className=" font-semibol text-sm">Alper</p>
              <p className=" text-slate-400 text-sm">@alper</p>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default FollowBar