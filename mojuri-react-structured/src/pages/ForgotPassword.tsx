import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="page-title" id="title">
<div class="section-container">
<div class="content-title-heading">
<h1 class="text-title-heading">
										Forgot Password
									</h1>
</div>
<div class="breadcrumbs">
<a href="/">Home</a><span class="delimiter"></span>Forgot Password
								</div>
</div>
</div>
<div class="site-content" id="content" role="main">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="page-forget-password">
<form class="reset-password" method="post">
<p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
<p class="form-row form-row-first">
<label>Username or email</label>
<input autocomplete="username" class="input-text" name="user_login" type="text"/>
</p>
<div class="clear"></div>
<p class="form-row">
<button class="button" type="submit" value="Reset password">Reset password</button>
</p>
</form>
</div>
</div>
</div>
</div><!-- #content -->
</div><!-- #primary -->
</div><!-- #main-content -->
</div>
`

export default function ForgotPassword() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-page-forgot-password" />
}
