import turbineIcon from './assets/turbine.svg'

export const LoadingScreen = () => {
  return (
    <div className='loading'>
      <div className='progress'>
        <div className='progress-inner'>
          <object data={turbineIcon} />
        </div>
      </div>
    </div>
  );
};
