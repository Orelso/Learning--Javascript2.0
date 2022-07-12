let robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop')
      }
    }
  }
  
  const tinCan = robotFactory('P-500', true)
  /*----------------------------------------------------------------------------------- */

  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot;
  functionality.beep()
  