function AutoComplete() {
  return (
    <>
      <div className="bg-white  rounded-3xl">
        <input type="text" placeholder="enter value "></input>
        <div>
          <h3 class="text-lg font-bold mb-2">List Title</h3>
          <ul className="list-none">
            <li>song name 1</li>
            <li>song name 2</li>
            <li>song name 3</li>
            <li>song name 4</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AutoComplete;
