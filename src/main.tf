#YOR:SKIPALL
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
    yor_name  = "example_subnet"
    yor_trace = "93435a1f-4429-46dd-bc37-f3a6c945d1f6"
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
}