import * as yup from 'yup'

const validateConfirmPW = (refString: string) => {
  return yup
    .string()
    .required('Vui lòng nhập lại mật khẩu')
    .min(6, 'Độ dài từ 6-160 kí tự')
    .max(160, 'Độ dài từ 6-160 kí tự')
    .oneOf([yup.ref(refString)], 'Mật khẩu không khớp')
}
export const schema = yup.object({
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .min(6, 'Độ dài từ 6-160 kí tự')
    .max(160, 'Độ dài từ 6-160 kí tự'),
  confirm_password: validateConfirmPW('password'),
  name: yup.string().required('Bắt buộc nhập').trim()
})

export type Schema = yup.InferType<typeof schema>
