
import { useForm } from '../../../hooks/useForm'
import TextField from '@mui/material/TextField';

import bannerForm from "../../../assets/img/banners/bannerForm.jpg"
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const initialFrom = {
  nombres: '',
  telefono: '',
  email: '',
  ciudad: '',
  sector: '',
  callePrincipal: '',
  calleSecundaria: '',

}

const Form = () => {

  const {
    nombres,
    telefono,
    email,
    ciudad,
    sector,
    callePrincipal,
    calleSecundaria,
    formState,
    onInputChange,
    onResetForm
  } = useForm(initialFrom)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState)

    // TODO: Lógica para enviar la información del formulario

    onResetForm()
  };

  return (
    <div className="flex flex-col items-center justify-center  px-4 py-4 lg:flex-row bg-white">

      <img className="rounded-lg md:w-4/5 lg:w-2/5" src={bannerForm} alt="" />

      <div className='flex flex-col items-center w-full  md:w-3/5 lg:w-1/2 lg:px-4'>

        <div className='flex flex-col items-center my-2'>
          <p className='text-2xl text-blue-800 font-bold'>¿Llega la fibra WiFi Total a tu casa?</p>
          <p className='text-center'>Ingresa tu dirección para saber si este servicio esta disponible en tu zona.</p>
        </div>


        <form onSubmit={handleSubmit} className="flex flex-col w-full  ">

          <TextField
            id="nombres"
            label="Nombres"
            variant="outlined"
            name='nombres'
            value={nombres}
            onChange={onInputChange}
            style={{ marginBottom: '0.5rem' }}
          />

          <TextField
            id="telefono"
            label="Teléfono"
            variant="outlined"
            name='telefono'
            value={telefono}
            onChange={onInputChange}
            style={{ marginBottom: '0.5rem' }}
          />

          <TextField
            id="mail"
            label="E-mail"
            variant="outlined"
            name='email'
            value={email}
            onChange={onInputChange}
            style={{ marginBottom: '0.5rem' }}
          />

          <Box sx={{ minWidth: 120, marginBottom: '0.5rem' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name='ciudad'
                value={ciudad}
                label="Ciudad"
                onChange={onInputChange}
              >
                <MenuItem value={'Ambato'}>Ambato</MenuItem>
                <MenuItem value={'Latacunga'}>Latacunga</MenuItem>
                <MenuItem value={'Riobamba'}>Riobamba</MenuItem>
                <MenuItem value={'Puyo'}>Puyo</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="sector"
            label="Sector"
            variant="outlined"
            name='sector'
            value={sector}
            onChange={onInputChange}
            style={{ marginBottom: '0.5rem' }}
          />

          <TextField
            id="callePrincipal"
            label="Calle Principal"
            variant="outlined"
            name='callePrincipal'
            value={callePrincipal}
            onChange={onInputChange}
            style={{ marginBottom: '0.5rem' }}
          />

          <TextField
            id="callenSecundaria"
            label="Calle Secundaria"
            variant="outlined"
            name='calleSecundaria'
            value={calleSecundaria}
            onChange={onInputChange}
            style={{ marginBottom: '0.5rem' }}
          />

          <button
            className='bg-pink-600 hover:bg-pink-700 text-white font-bold p-4 rounded-xl'
            type='submit'
          >
            Enviar
          </button>


        </form>
      </div>

    </div>
  )
}

export default Form