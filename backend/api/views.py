from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListCreateAPIView,
)
# from rest_framework.permissions import IsAuthenticated
from .models import (
    WorkModel,
    MaterialModel,
    WorksMaterialsModel,
)
# from .permissions import IsOwnerOrReadOnly
from .serializers import (
    WorkSerializer,
    MaterialSerializer,
    WorksMaterialsSerializer,
)
from .pagination import CustomPagination


class ListCreateWorkModelAPIView(ListCreateAPIView):
    serializer_class = WorkSerializer
    queryset = WorkModel.objects.all()
    # permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination

    def perform_create(self, serializer):
        # Assign the user who created the movie
        serializer.save(creator=self.request.user)


class RetrieveUpdateDestroyWorkModelAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = WorkSerializer
    queryset = WorkModel.objects.all()
    # permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


class ListCreateMaterialModelAPIView(ListCreateAPIView):
    serializer_class = MaterialSerializer
    queryset = MaterialModel.objects.all()
    # permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination

    def perform_create(self, serializer):
        # Assign the user who created the movie
        serializer.save(creator=self.request.user)


class RetrieveUpdateDestroyMaterialModelAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = MaterialSerializer
    queryset = MaterialModel.objects.all()
    # permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


class ListCreateWorksMaterialsModelAPIView(ListCreateAPIView):
    serializer_class = WorksMaterialsSerializer
    queryset = WorksMaterialsModel.objects.all()
    # permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination

    def perform_create(self, serializer):
        # Assign the user who created the movie
        serializer.save(creator=self.request.user)


class RetrieveUpdateDestroyWorksMaterialsModelAPIView(
    RetrieveUpdateDestroyAPIView,
):
    serializer_class = WorksMaterialsSerializer
    queryset = WorksMaterialsModel.objects.all()
    # permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
