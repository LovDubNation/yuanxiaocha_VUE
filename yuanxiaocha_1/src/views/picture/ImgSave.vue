<template>
    <div>
        <el-card>
            <el-form :model="userobj" :rules="rules" label-width="100px">
                <el-form-item label="图片标题" prop="itext">
                    <el-input v-model="userobj.itext" type="text" placeholder="请输入图片标题">

                    </el-input>
                </el-form-item>

                <el-form-item label="图片类型" prop="iteyp">
                    <!--  -->
                    <el-input v-model="userobj.iteyp" :type="flage?'text':'iteyp'" placeholder="请输入图片类型">
                    </el-input>
                </el-form-item>


                <el-form-item label="选择上传图片" prop="">
                    <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>


                </el-form-item>
                <el-form-item label="图片描述" prop="">
                    <el-input placeholder="请输入图片类型"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                userobj:{
                    //图片标题
                    itext:"",
                    //图片类型
                    iteyp:""
                },
                //定义一个标杆，控制眼睛的显示和隐藏
                flage:false,
                rules:{
                    account:[
                        { required: true, message:'此选项不能为空',trigger:'blur'},
                        { min:11,max: 11, message:'请输入正确的电话号码',trigger:'vlur'}
                    ],
                    password:[
                        { required: true, message:'此选项不能为空',trigger:'blur'},
                        { min:3,max: 3, message:'请输入正确的电话号码',trigger:'vlur'}
                    ]
                },
            };
        },
        methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }

</script>

<style lang="less" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>