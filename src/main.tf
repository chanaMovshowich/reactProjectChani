resource "aws_vpc" "example_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    yor_name  = "example_vpc"
    yor_trace = "b2d07855-5983-4677-8d52-ac9c0e33129e"
  }
}

resource "aws_subnet" "example_subnet" {
  vpc_id            = aws_vpc.example_vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-west-1a"
  tags = {
<<<<<<< HEAD
    yor_trace = "b2d07855-5983-4677-8d52-ac9c0e33129e"
  }
}

resource "aws_subnet" "example_subnet" {
  vpc_id            = aws_vpc.example_vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-west-1a"
  tags = {
    yor_name  = "example_subnet"
    yor_trace = "a73e9e48-6941-46e5-ab78-f1b42a985b47"
  }
}

resource "aws_instance" "example_instace" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.example_subnet.id
  tags = {
    yor_name  = "example_instace"
    yor_trace = "15178587-c42e-490e-9c31-69e63add8d75"
  }
=======
    yor_name  = "example_subnet"
    yor_trace = "7393af01-1e00-4015-9571-a04c40167688"
  }
}

resource "aws_instance" "example_instace" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.example_subnet.id
  tags = {
    yor_name  = "example_instace"
    yor_trace = "15178587-c42e-490e-9c31-69e63add8d75"
  }
>>>>>>> 54c777b (s)
}