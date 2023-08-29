const students = [
    {student: 'Homer', present: true},
    {student: 'Bart', present: false},
    {student: 'Lisa', present: false}
  ];

  module.exports = {
    getAll: function() {
      return students;
    }
  };