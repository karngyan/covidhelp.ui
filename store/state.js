export default function() {
  return {
    user: null,
    simple: null,
    success: null,
    danger: null,
    signUpState: false,
    volunteers: [],
    postsByUser: [],
    locale: localStorage.getItem('covidhelp.locale') || 'en'
  }
}
