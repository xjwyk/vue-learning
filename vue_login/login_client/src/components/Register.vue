<template>
  <div>
    <div class="register-wrapper">
      <div id="register">
        <p class="title">注册</p>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="0"
          class="demo-ruleForm"
        >
          <el-form-item prop="name">
            <el-input
              type="text"
              v-model="ruleForm.name"
              auto-complete="off"
              placeholder="请输入用户名, 字母开头, 字符数在3-15个之间"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              auto-complete="off"
              placeholder="请输入密码, 长度在6-16个字符数"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              auto-complete="off"
              placeholder="请确认密码, 长度在6-16个字符数"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              type="email"
              v-model="ruleForm.email"
              auto-complete="off"
              placeholder="请输入邮箱, 例如web@163.com"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="tel">
            <el-input
              type="text"
              v-model="ruleForm.tel"
              auto-complete="off"
              placeholder="请输入手机号, 1开头的手机号码"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="id_no">
            <el-input
              type="text"
              v-model="ruleForm.id_no"
              auto-complete="off"
              placeholder="请输入身份证号码"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="sex">
            <el-select
              v-model="select_value"
              clearable
              placeholder="请选择性别"
              style="width:100%"
            >
              <el-option
                v-for="item in sex"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              style="width:100%;"
            >
              <span>注册</span>
            </el-button>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    // <!--验证用户名是否合法-->
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!this.checkUser(value)) {
        callback(new Error("用户名格式不正确"));
      } else {
        callback();
      }
    };
    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!this.checkMobile(value)) {
        callback(new Error("手机号码不合法"));
      } else {
        callback();
      }
    };
    // <!--验证密码是否合法-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度不得小于6位"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // <!--验证邮箱是否合法-->
    let validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!this.checkEmail(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    // <!--验证身份证号码是否合法-->
    let validateID = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入身份证号码"));
      } else if (!this.checkID(value)) {
        callback(new Error("身份证号码格式错误"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        email: "",
        tel: "",
        id_no: "",
        sex: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }],
        email: [{ validator: validateEmail, trigger: "change" }],
        tel: [{ validator: checkTel, trigger: "change" }],
        id_no: [{ validator: validateID, trigger: "change" }],
        sex: [{ required: false, message: "请选择性别", trigger: "blur" }]
      },
      sex: [
        {
          value: "1",
          label: "男"
        },
        {
          value: "2",
          label: "女"
        }
      ],
      select_value: ""
    };
  },
  methods: {
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const param = {
            username: this.ruleForm.name,
            password: this.ruleForm.pass,
            email: this.ruleForm.email,
            phone: this.ruleForm.tel,
            card: this.ruleForm.id_no,
            sex: this.ruleForm.sex
          };
          this.$axios
            .post("user/register", param)
            .then(res => res.data)
            .then(data => {
              if (data.code === 0) {
                this.$message("注册成功!");
                this.gotoLogin();
              }
            });
        } else {
          return false;
        }
      });
    },
    // <!--进入登录页-->
    gotoLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    // 验证用户名
    checkUser(str) {
      let re = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    // 验证密码
    checkPassword(str) {
      let re = /^[a-zA-Z0-9]{6-16}/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    // 验证邮箱
    checkEmail(str) {
      let re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    // 验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    // 验证身份证号码
    checkID(str) {
      let re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-wrapper img {
  position: absolute;
  z-index: 1;
}
.register-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#register {
  max-width: 340px;
  position: relative;
  z-index: 9;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 75px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
.el-form-item {
  text-align: center;
}
.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}
.login:hover {
  color: #2c2fd6;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
</style>