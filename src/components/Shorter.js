function validateUrl(url) {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
}

function processingData(res) {
  console.log(res);
}

function getUrlShorter(url) {}

function shortenUrl() {
  const url = document.querySelector("#urlInput").value;
  if (validateUrl(url)) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then(function (res) {
        processingData(res);
      });
  } else {
    console.log("No es una url");
  }
}

function Shorter() {
  return (
    <section className="w-full grid grid-rows-2 grid-cols-1">
      <div className="bg-white row-start-1 row-end-2 col-span-full"></div>
      <div className="bg-light-gray row-start-2 row-end-3 col-span-full"></div>
      <div className="container mx-auto max-w-6xl px-6 lg:px-0 my-3  row-start-1 row-end-3 col-span-full">
        <form className="flex flex-col gap-4 md:flex-row p-6 md:py-12 md:px-16 bg-dark-violet bg-shortenMobile bg-no-repeat bg-cover md:bg-shortenDesktop rounded-xl">
          <input
            id="urlInput"
            type="url"
            placeholder="Shorten a link here..."
            className="w-full py-3 px-4 text-bold rounded md:text-xl md:px-8 md:py-5"
          />
          <input
            type="button"
            value="Shorten It!"
            className="bg-cyan text-white text-bold text-lg  py-2.5 rounded md:text-xl md:py-5 md:px-10"
            onClick={shortenUrl}
          />
        </form>
      </div>
    </section>
  );
}

export default Shorter;
