// TODO: Complete the MeetupProfile component

export default function MeetupProfile({ params }: { params: { id: string } }) {
  return (
    <div className="flex justify-center items-center h-screen font-inter">
      <div className="w-[450px] p-6">
        <h2 className="text-black dark:text-white text-left text-3xl font-semibold mb-2">
          Log In
        </h2>
        <p className="text-gray-400 text-left text-sm mb-4">
          Don&apos;t have an account?{" "}
          <a
            className="underline text-blue-500"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-2">
            <input
              type="text"
              placeholder="Username / Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-6 py-[14px] pl-12 rounded-lg filter drop-shadow-md dark:text-white text-black text-sm"
            />
            <UserCircleIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-6 py-[14px] pl-12 pr-12 rounded-lg filter drop-shadow-md dark:text-white text-black text-sm"
            />
            <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="w-6 h-6 text-gray-400" />
              ) : (
                <EyeSlashIcon className="w-6 h-6 text-gray-400" />
              )}
            </div>
          </div>
          <p className="text-red-500 text-sm mb-4">{error}</p>
          <p className="text-blue-500  mb-2 text-sm">Forgot Password?</p>

          <Button
            type="submit"
            className="w-full bg-blue-500 flex items-center justify-center filter drop-shadow-md text-white px-4 py-3 rounded-lg cursor-pointer text-base"
            isLoading={isLoading}
          >
            Log In <ArrowLongRightIcon className="ml-4 w-6 h-6" />
          </Button>
        </form>
      </div>
    </div>
  );
}
