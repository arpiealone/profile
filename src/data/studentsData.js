const generateStudents = () => {
  const roles = ["Lead Developer", "UI Designer", "System Analyst", "Quality Assurance", "Project Manager"];
  return Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    name: `Nama Siswa ${i + 1}`,
    alias: `Subject-${(i + 1).toString().padStart(3, '0')}`,
    role: roles[i % roles.length],
    quote: "Kreativitas adalah kecerdasan yang sedang bersenang-senang.",
    specialty: ["React", "Python", "Logic", "Design", "Hardware"][i % 5],
    image: `https://images.unsplash.com/photo-${[
      "1535713875002-d1d0cf377fde",
      "1527980965255-d3b416303d12",
      "1438761681033-6461ffad8d80",
      "1507003211169-0a1dd7228f2d",
      "1544005313-94ddf0286df2"
    ][i % 5]}?auto=format&fit=crop&q=80&w=400`
  }));
};

const studentsData = generateStudents();

export default studentsData;
