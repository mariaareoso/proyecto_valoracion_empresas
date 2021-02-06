import ShowToLoggedInUsers from '../components/ShowToLoggedInUsers';

function Landing(params) {
  return (
    <>
      <div>
        <h2>Lo ven todos</h2>
        <ShowToLoggedInUsers>
          <h2>Lo ven solo logeados</h2>
        </ShowToLoggedInUsers>
      </div>
    </>
  );
}

export default Landing;
