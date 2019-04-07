<template>
  <div>
    <h2>Todos</h2>
    <div class="legend">
      <div>Double click to mark as complete</div>
      <div class="tips">
        <div>
          <span class="incomplete-box"></span> = Incomplete
        </div>
        <div>
          <span class="complete-box"></span> = Complete
        </div>
      </div>
    </div>
    <div class="todos">
      <div 
        @dblclick="onDblClick(todo)" 
        v-for="todo in allTodos" 
        :key="todo.id" 
        class="todo"
        v-bind:class="{'is-complete':todo.completed}">
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Todos",
  // methods: mapActions(['fetchTodos']),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(['allTodos']),
  // eslint-disable-next-line no-dupe-keys
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }

  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .tips {
    display: flex;
    flex-direction: column;
  }

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }

  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }

  .is-complete {
    background: #35495e;
    color: #fff;
  }

  @media (max-width: 500px) {
    .todo {
      grid-template-columns: 1fr;
    }
  }
</style>
