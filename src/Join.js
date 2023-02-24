import './Join.css';

function Join() {
  const name = '하니';
  const hanyStyle = {
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <section className='main'>
      <div className='inner'>
        <h1 className='title'>통합회원 가입</h1>

        <div className='contents'>
            
        </div>
      </div>
    </section>
  );

  // return (
  //   <div className="App">
  //     { name === '하니' ? (
  //       <h1>리액트입니다</h1>
  //       ) : (
  //       <h1>리액트가 아닙니다</h1>
  //       )
  //     }
  //   </div>
  // );
}

export default Join;
