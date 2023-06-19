
import './App.css';
import React, { useState, useEffect, details}  from "react";
// import { getData } from './dataUtils.js';




 function App(){


  const url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

var MyComponent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [infoContent, setInfoContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getData = (dataItem) => {
    const row = (
      <tr className="data-row" key={dataItem.id} onClick={() => handleRowClick(dataItem)}>
        <td className="column1">{dataItem.id}</td>
        <td className="column2">{dataItem.firstName}</td>
        <td className="column3">{dataItem.lastName}</td>
        <td className="column4">{dataItem.email}</td>
        <td className="column5">{dataItem.phone}</td>
      </tr>
    );

    return row;
  };

  const renderDataRows = () => {
    return data.map((dataItem) => {
      const row = getData(dataItem);

      return <React.Fragment key={dataItem.id}>{row}</React.Fragment>;
    });
  };

  const handleRowClick = (dataItem) => {
    details(dataItem);
  };

  const details = (dataItem) => {
    const { firstName, lastName, address, description } = dataItem;
    const { streetAddress, city, state, zip } = address;

    setInfoContent(
      <div>
        <b>User selected:</b> {firstName} {lastName}
        <div>
          <b>Description: </b>
          <textarea cols="50" rows="5" readOnly>
            {description}
          </textarea>
        </div>
        <div>
          <b>Address:</b> {streetAddress}
        </div>
        <div>
          <b>City:</b> {city}
        </div>
        <div>
          <b>State:</b> {state}
        </div>
        <div>
          <b>Zip:</b> {zip}
        </div>
      </div>
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightSearchTerms = (text) => {
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };

  const renderFilteredDataRows = () => {
    return data.map((dataItem) => {
      const row = getData(dataItem);
      const isMatch =
        searchTerm &&
        row.props.children.some((child) => {
          const text = typeof child === 'string' ? child : child.props.children;
          return text.toLowerCase().includes(searchTerm.toLowerCase());
        });

      return (
        <React.Fragment key={dataItem.id}>
          {isMatch ? (
            <tr className="data-row" onClick={() => handleRowClick(dataItem)}>
              {React.Children.map(row.props.children, (child, index) => {
                const text = typeof child === 'string' ? child : child.props.children;
                const highlightedText = highlightSearchTerms(text);
                return <td className={`column${index + 1}`} dangerouslySetInnerHTML={{ __html: highlightedText }} />;
              })}
            </tr>
          ) : null}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <table>
        <tbody>{renderFilteredDataRows()}</tbody>
      </table>
      <div>{infoContent}</div>
    </div>
  );
};

// export default MyComponent;





  return(<>
    <div ClassName ="App"><div id="overlay">
    <img src="./img/preloader.gif" alt="Preloader icon" />
</div>
<main>
   

    <div id="table-section">

        <form action="/">
            <img href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fsearch&psig=AOvVaw0I2qKA4XPeyTRMSIY1xdn2&ust=1687164122599000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD9iYXDzf8CFQAAAAAdAAAAABAE" alt=""/>
            <input type="text" placeholder="Enter something" name="search-box" id="search-box" value="" />
        </form>

        <div id="table-wrapper">

            <div id="table-headers">
                <table>
                    <thead>
                        <tr>
                            <th class="column1">Id</th>
                            <th class="column2">FirstName</th>
                            <th class="column3">LastName</th>
                            <th class="column4">Email</th>
                            <th class="column5">Phone</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div id="table-data">
                <table>
                    <tbody>
                        <tr class="data-row">
                            <td class="column1">28</td>
                            <td class="column2">Larisa</td>
                            <td class="column3">Llaneza</td>
                            <td class="column4">SCallison@non.org</td>
                            <td class="column5">(763)248-9034</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">835</td>
                            <td class="column2">Marcellin</td>
                            <td class="column3">Shrestha</td>
                            <td class="column4">ARose@sagittis.ly</td>
                            <td class="column5">(801)653-7547</td>
                        </tr>
                        <tr class="data-row active">
                            <td class="column1">654</td>
                            <td class="column2">Xiumei</td>
                            <td class="column3">Jongco</td>
                            <td class="column4">AKoprowski@vitae.ly</td>
                            <td class="column5">(773)391-2969</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">70</td>
                            <td class="column2">Tanya</td>
                            <td class="column3">Gonshor</td>
                            <td class="column4">PPervaiz@nullam.io</td>
                            <td class="column5">(376)035-7184</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">943</td>
                            <td class="column2">Sritharan</td>
                            <td class="column3">Worden</td>
                            <td class="column4">DLencowski@tortor.ly</td>
                            <td class="column5">(714)779-2847</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">796</td>
                            <td class="column2">Josephine</td>
                            <td class="column3">Geouque</td>
                            <td class="column4">KChristopher@amet.io</td>
                            <td class="column5">(421)120-7963</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">339</td>
                            <td class="column2">Yu</td>
                            <td class="column3">Ferreira</td>
                            <td class="column4">KHeppelmann@amet.com</td>
                            <td class="column5">(101)002-6875</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">25</td>
                            <td class="column2">Kathy</td>
                            <td class="column3">Hansen</td>
                            <td class="column4">MJacobs@lacus.io</td>
                            <td class="column5">(984)584-1749</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">833</td>
                            <td class="column2">Deitric</td>
                            <td class="column3">Whitman</td>
                            <td class="column4">JRamsey@tortor.io</td>
                            <td class="column5">(301)556-8434</td>
                        </tr>
                        <tr class="data-row">
                            <td class="column1">856</td>
                            <td class="column2">Yeqing</td>
                            <td class="column3">Elshoff</td>
                            <td class="column4">RKimmel@tincidunt.com</td>
                            <td class="column5">(230)488-3157</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    </div>



    {/* <!-- Details box --> */}

    <div id="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div id="info-content">
            <div><b>User selected:</b> Marcellin Shrestha</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                </textarea>
            </div>
            <div><b>Address:</b> 6480 Nec Ct</div>
            <div><b>City:</b> Dinwiddie</div>
            <div><b>State:</b> NV</div>
            <div><b>Zip:</b> 91295</div>
        </div>
    </div>

</main>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </>
  );
}
export default App;

