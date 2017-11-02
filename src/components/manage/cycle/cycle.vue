<template>
  <div class="spot">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="day">
          <p class="spot__title">日常点检</p>
          <el-form ref="dayForm" :model="dayForm" label-width="80px">
            <el-form-item label="开始日期">
              <el-date-picker
                v-model="dayForm.start"
                type="date"
                placeholder="选择日期"
                >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="停止日期">
              <el-date-picker
                v-model="dayForm.end"
                type="date"
                placeholder="选择日期"
                >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="点检周期">
              <el-input v-model="dayForm.cycle" class="spot-cycle" placeholder="1"></el-input> 天
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="profess">
          <p class="spot__title">专业点检</p>
          <el-form ref="professForm" :model="professForm" label-width="80px">
            <el-form-item label="开始日期">
              <el-date-picker
                v-model="professForm.start"
                type="date"
                placeholder="选择日期"
                >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="停止日期">
              <el-date-picker
                v-model="professForm.end"
                type="date"
                placeholder="选择日期"
                >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="点检周期">
              <el-input v-model="professForm.cycle" class="spot-cycle" placeholder="1"></el-input> 天
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="precision">
          <p class="spot__title">精密点检</p>
          <el-form ref="precisionForm" :model="precisionForm" label-width="80px">
            <el-form-item label="开始日期">
              <el-date-picker
                v-model="precisionForm.start"
                type="date"
                placeholder="选择日期"
                >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="停止日期">
              <el-date-picker
                v-model="precisionForm.end"
                type="date"
                placeholder="选择日期"
                >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="点检周期">
              <el-input v-model="precisionForm.cycle" class="spot-cycle" placeholder="1"></el-input> 天
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row class="spot-footer">
      <el-button type="primary" class="confirmSpot">确认</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dayCheck: '',
      dayForm: {
        start: '',
        end: '',
        cycle: ''
      },
      professForm: {
        start: '',
        end: '',
        cycle: ''
      },
      precisionForm: {
        start: '',
        end: '',
        cycle: ''
      }

    }
  }
}
</script>

<style>
.spot {
  margin-top: 10px;
}
.day,
.profess {
  border-right: 3px solid #ececec;
}

.day,
.profess,
.precision {
  padding: 20px 20px 20px 0;
}

.spot__title {
  text-align: center;
  margin-bottom: 30px;
}

.spot-cycle {
  width: 20%;
  margin-right: 10px;
}

.confirmSpot {
  width: 20%;
  margin: 100px auto;
}

.spot-footer {
 text-align: center;
}
</style>
