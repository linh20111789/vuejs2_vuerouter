<template>
    <div id="content">
      <h1>
        求人一覧
      </h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>件名</th>
            <th>ステータス</th>
            <th>動作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" v-bind:key="project">
            <td>{{project.id}}</td>
            <td>{{project.subject}}</td>
            <td>{{project.status}}</td>
            <td>{{project.action}}</td>
          </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
export default {
  name: 'Component-ComponentCT_Project',
  data() {
    return {
      projects:[
        {id: '1', subject: 'TODO', status: '終了', action: '動作'},
      ],
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}
th {
  border-bottom: 2px solid #ddd;
  text-align: left;
}
</style>
