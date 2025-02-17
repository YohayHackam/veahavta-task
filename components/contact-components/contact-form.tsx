import { BlueButton } from '../data-components/button-text'
import { Common } from '@/lib/interface'
import { Formik, Field } from 'formik'
import { InputTextField, TextAreaField } from './form-components/input-field'
import { useLocale } from '@/lib/hooks'

interface Values {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}
interface Errors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}
const emailRegex = new RegExp(
  '^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$',
)
const phoneRegex = new RegExp('^[0][1-9]{1,2}[-]{0,1}[0-9]{7}$')

export default function ContactForm({ data }: { data: Common }) {
  const { dir } = useLocale()
  return (
    <>
      <Formik<Values>
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        }}
        validate={(values) => {
          let errors: Errors = {}
          if (!values.firstName) {
            errors.firstName = data.contactUsFormErrorFirstNameMissing
          }
          if (!values.lastName) {
            errors.lastName = data.contactUsFormErrorLastNameMissing
          }
          if (!values.email) {
            errors.email = data.contactUsFormErrorEmailMissing
          } else if (!emailRegex.test(values.email)) {
            errors.email = data.contactUsFormErrorEmailInvalid
          }
          if (!values.phone) {
            errors.phone = data.contactUsFormErrorPhoneMissing
          } else if (!phoneRegex.test(values.phone)) {
            errors.phone = data.contactUsFormErrorPhoneInvalid
          }
          if (!values.message) {
            errors.message = data.contactUsFormErrorMessageMissing
          }
          return errors
        }}
        onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
          setSubmitting(true)
          console.log('values to send : ', values)
          resetForm()
          setStatus({ success: true })
          setSubmitting(false)
        }}
        //OnBlur = {(setStatus) => setStatus()}
        validateOnBlur={true}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          status,
        }) => (
          <form
            className={`${
              dir === 'rtl'
                ? 'sm:left-5 sm:right-auto 2xl:right-formSpace 2xl:left-auto'
                : ' 2xl:left-formSpace 2xl:right-auto sm:right-0 sm:left-auto'
            } 
          w-fit sm:h-formMinHight sm:bottom-formBottom absolute right-0 shadow-4xl bottom-9 
           mx-5 z-10  border-2 border-white rounded-[36px] bg-white`}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:grid sm:grid-cols-1fr-1fr mt-12 mx-6 relative">
              <fieldset className="my-3 mx-4 relative">
                <Field
                  name="firstName"
                  label={data.contactUsFormFirstName}
                  component={InputTextField}
                />
                {touched.firstName && errors.firstName && (
                  <p className=" absolute right-1 font-bold text-red">
                    {errors.firstName}
                  </p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 relative">
                <Field
                  name="lastName"
                  label={data.contactUsFormLastName}
                  component={InputTextField}
                />
                {touched.lastName && errors.lastName && (
                  <p className="absolute  right-1  font-bold text-red">
                    {errors.lastName}
                  </p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 relative">
                <Field
                  name="email"
                  label={data.contactUsFormEmail}
                  component={InputTextField}
                />
                {touched.email && errors.email && (
                  <p className="absolute  right-1  font-bold text-red">
                    {errors.email}
                  </p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 relative">
                <Field
                  name="phone"
                  label={data.contactUsFormPhone}
                  component={InputTextField}
                />
                {touched.phone && errors.phone && (
                  <p className="absolute   right-1 font-bold text-red">
                    {errors.phone}
                  </p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 col-span-2 relative">
                <Field
                  name="message"
                  label={data.contactUsFormMessage}
                  component={TextAreaField}
                />
                {touched.message && errors.message && (
                  <p className="absolute  right-1  font-bold text-red">
                    {errors.message}
                  </p>
                )}
                {status?.success && (
                  <p className="absolute font-bold">
                    {data.contactUsFormSuccessMessage}
                  </p>
                )}
              </fieldset>
              <BlueButton
                text={data.contactUsFormSendButton}
                disabled={Object.keys(errors).length ? true : false}
                className="text-xl_2_5 mx-4 my-5"
                type="submit"
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}
