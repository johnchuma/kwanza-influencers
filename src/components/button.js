export default function Button({ text, onClick, loading }) {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick}
        className="border border-transparent flex justify-center rounded-xl  w-full bg-gradient-to-r from-primaryColor to-secondaryColor text-textColor font-bold my-5 p-3"
      >
        {loading ? (
          <div className="border-4 size-6 animate-spin rounded-full border-b-transparent border-white" />
        ) : (
          text
        )}
      </button>
    </div>
  );
}
