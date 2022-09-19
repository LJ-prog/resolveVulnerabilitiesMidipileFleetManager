import { useQuasar } from 'quasar'
export default function useNotify () {
  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      lang: 'fr',
      message: message || 'Données transmises !'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      lang: 'fr',
      message: message || 'Veuillez renseigner des identifiants valides'
    })
  }

  return {
    notifySuccess,
    notifyError
  }
}
