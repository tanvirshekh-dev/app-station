import LoaderAnimation from "/loading.gif";

export default function Loading() {
  return (
    <>
      <div className="py-2">
        <img src={LoaderAnimation} alt="loading" className="mx-auto"/>
      </div>
    </>
  );
}

