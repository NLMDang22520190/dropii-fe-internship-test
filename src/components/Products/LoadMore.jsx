import React from "react";

const LoadMore = ({ loading, hasMore, onLoadMore }) => {
  if (!hasMore) return null;

  return (
    <div className="flex justify-center mt-10 mb-6">
      <button
        onClick={onLoadMore}
        disabled={loading}
        className="cursor-pointer px-6 py-2 border border-gray-300 rounded-lg bg-white text-black hover:bg-gray-100 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMore;
