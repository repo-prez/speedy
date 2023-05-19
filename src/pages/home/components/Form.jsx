
import { useForm } from '../../../hooks/useForm'
import TextField from '@mui/material/TextField';

import bannerForm from "../../../assets/img/banners/bannerForm.webp"
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

    // TODO: Lógica para enviar la información del formulario

    onResetForm()
  };

  return (

    <div className='flex justify-center px-8  md:px-0  xl:w-full'>



      <div className="flex flex-col items-center justify-center lg:flex-row  lg:justify-between  rounded-lg shadow-xl bg-white md:m-8 lg:m-0  lg:w-10/12  xl:w-8/12 ">


        <img className="rounded-lg object-cover  md:w-auto lg:h-full lg:w-6/12 xl:w-6/12" src={bannerForm} alt="imagen formulario" />


        <div className='flex flex-col items-center justify-center px-4  lg:p-4 lg:mr-10 w-full h-full lg:w-5/12  xl:mx-12 '>
          <div className='flex flex-col items-center  lg:mb-4'>
            <p className='text-2xl xl:text-3xl  text-blue-800 font-bold'>¿Llega Fibra WIFI Total a tu casa?  </p>
            <p className='text-justify xl:text-xl'>Ingresa tu dirección para saber si este servicio esta disponible en tu zona.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full lg:">

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
              className='bg-secondary hover:bg-pink-700 text-white font-bold p-4 my-8 lg:my-0 rounded-xl'
              type='submit'
            >
              Enviar
            </button>


          </form>
        </div>

      </div>

    </div>

  )
}

export default Form