task :build do
  sh "npm run build"
  sh "(cd posts && rake)"
  sh "sudo docker build . -t blog-server"
end

task default: :build
