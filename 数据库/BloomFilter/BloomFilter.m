K=1:1:20;
M=1:1000:1000000;
N=100000;
[K,M]=meshgrid(K,M);
P=(1-(1-1./M).^(K.*N)).^K;
mesh(K,M,P);
xlabel('hash��������K')
ylabel('bit array����M')
zlabel('������P')