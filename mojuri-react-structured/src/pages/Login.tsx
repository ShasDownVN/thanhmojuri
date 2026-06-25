import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { DEMO_ADMIN_TOKEN, demoAdminUser, isDemoAdminLogin } from '../services/demoAuth'
import { useAuthStore } from '../stores/authStore'

export default function Login() {
  const navigate = useNavigate()
  const setSession = useAuthStore((state) => state.setSession)
  const user = useAuthStore((state) => state.user)
  const lastUser = useAuthStore((state) => state.lastUser)
  const sessionStatus = useAuthStore((state) => state.sessionStatus)
  const displayUser = user ?? lastUser
  const [loginForm, setLoginForm] = useState({
    email: 'admin@mojuri.local',
    password: 'admin123',
  })
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await api.login(loginForm.email, loginForm.password)
      setSession(response.token, response.user)
      setMessage(`${response.user.name} đang hoạt động.`)
      navigate(response.user.role === 'admin' ? '/admin' : '/account')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Đăng nhập thất bại')
    } finally {
      setLoading(false)
    }
  }

  async function handleLoginWithDemoFallback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await api.login(loginForm.email, loginForm.password)
      setSession(response.token, response.user)
      setMessage(`${response.user.name} is active.`)
      navigate(response.user.role === 'admin' ? '/admin' : '/account')
    } catch (error) {
      if (isDemoAdminLogin(loginForm.email, loginForm.password)) {
        setSession(DEMO_ADMIN_TOKEN, demoAdminUser)
        setMessage('Mojuri Admin is active.')
        navigate('/admin')
        return
      }
      setMessage(error instanceof Error ? error.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await api.register(registerForm.name, registerForm.email, registerForm.password)
      setSession(response.token, response.user)
      setMessage(`Người đăng ký ${response.user.name} đã tạo tài khoản thành công.`)
      setRegisterForm({ name: '', email: '', password: '' })
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Đăng ký thất bại')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <div className="content-title-heading">
            <h1 className="text-title-heading">Login / Register</h1>
          </div>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>Login / Register
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container p-l-r">
          <div className="page-login-register auth-page">
            {displayUser && (
              <div className={`auth-status auth-status-${sessionStatus}`}>
                <strong>{displayUser.name}</strong>
                <span>{sessionStatus === 'active' ? 'đang hoạt động' : 'ngưng hoạt động'}</span>
              </div>
            )}
            <div className="auth-admin-actions">
              <Link className="button auth-admin-link" to="/admin">
                Trang quản trị admin
              </Link>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 sm-m-b-50">
                <div className="box-form-login">
                  <h2>Đăng nhập</h2>
                  <form className="auth-form" onSubmit={handleLoginWithDemoFallback}>
                    <label>
                      Địa chỉ email <span className="required">*</span>
                      <input
                        className="input-text"
                        required
                        type="email"
                        value={loginForm.email}
                        onChange={(event) => setLoginForm({ ...loginForm, email: event.target.value })}
                      />
                    </label>
                    <label>
                      Mật khẩu <span className="required">*</span>
                      <input
                        className="input-text"
                        required
                        type="password"
                        value={loginForm.password}
                        onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })}
                      />
                    </label>
                    <div className="rememberme-lost">
                      <div className="remember-me">
                        <input type="checkbox" />
                        <label className="inline">Nhớ tôi</label>
                      </div>
                      <div className="lost-password">
                        <a href="/forgot-password">Mất mật khẩu?</a>
                      </div>
                    </div>
                    <button className="button" disabled={loading} type="submit">
                      Đăng nhập
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="box-form-login">
                  <h2 className="register">Đăng ký</h2>
                  <form className="auth-form" onSubmit={handleRegister}>
                    <label>
                      Họ và tên <span className="required">*</span>
                      <input
                        className="input-text"
                        required
                        value={registerForm.name}
                        onChange={(event) => setRegisterForm({ ...registerForm, name: event.target.value })}
                      />
                    </label>
                    <label>
                      Địa chỉ email <span className="required">*</span>
                      <input
                        className="input-text"
                        required
                        type="email"
                        value={registerForm.email}
                        onChange={(event) => setRegisterForm({ ...registerForm, email: event.target.value })}
                      />
                    </label>
                    <label>
                      Mật khẩu <span className="required">*</span>
                      <input
                        className="input-text"
                        minLength={6}
                        required
                        type="password"
                        value={registerForm.password}
                        onChange={(event) => setRegisterForm({ ...registerForm, password: event.target.value })}
                      />
                    </label>
                    <button className="button" disabled={loading} type="submit">
                      Đăng ký
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {message && <p className="auth-message">{message}</p>}
          </div>
        </div>
      </section>
    </main>
  )
}
